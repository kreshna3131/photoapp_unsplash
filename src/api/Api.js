import { createApi } from "unsplash-js"

const APP_ACCESS_KEY = "CkJ672Y98n4gNBaZ694ml_OMP5EkQl4Mrje6H89pE30"

const unsplash = createApi({
  accessKey: APP_ACCESS_KEY,
})

export default unsplash
