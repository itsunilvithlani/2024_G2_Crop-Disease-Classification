import AWS from 'aws-sdk'

AWS.config.update({
  accessKeyId: 'AKIAQ3EGRFLLQ5HRCUO3',
  secretAccessKey: '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',
  region: 'ap-south-1',
  signatureVersion: 'v4',
})

const createS3Directory = async (email) => {
  const s3 = new AWS.S3()
  const bucketName = 'userlogindisease'

  // Generate a directory key based on the user's email
  const directoryKey = `user_directories/${email}/`

  const params = {
    Bucket: bucketName,
    Key: directoryKey,
    Body: '', // You can provide a placeholder content if needed
  }

  try {
    await s3.putObject(params).promise()
    console.log('Directory created successfully:', directoryKey)
    return true
  } catch (error) {
    console.error('Error creating directory in S3:', error)
    return false
  }
}

export default createS3Directory
