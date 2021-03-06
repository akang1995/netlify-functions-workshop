/* Triggered when a deploy is locked in production and Netlify stops autopublishing deploys. */
exports.handler = async (event, context) => {
  console.log('deploy-locked')
  console.log('event', event)
  console.log('context', context)
  return {
    statusCode: 200,
    body: JSON.stringify({
      data: true
    })
  }
}
