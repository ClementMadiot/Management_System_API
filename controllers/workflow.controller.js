// import dayjs to handle dates
import dayjs from 'dayjs';
// import serve from the express module
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { serve } = require('@upstash/workflow/express');

// import the Subscription model
import Subscription from '../models/subscription.model.js';

const REMINDERS = [7,5,2,1]


export const sendReminders = serve(async (context) => {
  const { subscriptionId } = context.requestPayload;
  const subscription = await fetchSubscription(context, subscriptionId)

  // Check if the subscription exists and if isn't active
  if (!subscription || subscription.status !== active) return

  // Check when is the renewal date
  const renewalDate = dayjs(subscription.renewalDate)
  if(renewalDate.isBefore(dayjs())) {
    console.log(`Renewal date has passed for subscription ${subscription._id}. Stopping workflow.`);
    return    
  }

  // Reminders logic
  for (const daysBefore of REMINDERS){
    const reminderDate = renewalDate.subtract(daysBefore, 'day')
    
    if(reminderDate.isAfter(dayjs())) {
      await sleepUntilReminder(context,`Reminder ${daysBefore}-days-before`, reminderDate)
    }
    await triggerReminder(context, `Reminder ${daysBefore}-days-before`)
  }
})

const fetchSubscription = async (context, subscriptionId) => {
  return await context.run('get subscription', () => {
    return Subscription.findById(subscriptionId).populate('user', 'name email')
  })
}

const sleepUntilReminder = async (context, label, date) => {
  console.log(`Sleeping until ${label} reminder at ${date}`);
  await context.sleepUntil(label, date.toDate())  
}

const triggerReminder = async (context, label) => {
  return await context.run(label, () => {
    console.log(`Sending ${label} reminder`);
    // Send email, sms, push notification...
  })
}