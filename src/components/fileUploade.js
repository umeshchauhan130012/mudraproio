import React from 'react'

export default function FileUploade() {
  return (
    <div className="input_item">
    <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture"
        maxCount={1}
        >
      <Button icon={<UploadOutlined />}>Upload (Max: 1)</Button>
    </Upload>
    </div>
  )
}
