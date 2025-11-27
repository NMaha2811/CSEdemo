import Contentstack from 'contentstack'
import ContentstackLivePreview from "@contentstack/live-preview-utils";

const Stack = Contentstack.Stack({'api_key': 'blt39b0f80088b8dd23', 'delivery_token': 'csc3dfd3a979e3854195497c97', 'environment': 'production',live_preview : {
    preview_token : "cs3f78bd472df4ebaa5eb899ba",   enable: true,
    host: 'rest-preview.contentstack.com'
  }});



export function initializeLP() {
  ContentstackLivePreview.init({
    enable: true,
    ssr: true,
    // stackSdk: Stack,
    // Recommended: Enables Edit Tags
    editButton: { enable: true },
    // stackDetails: {
    //   apiKey: "bltf0390d6716f2ad68",
    //   environment: "api_testing",
    // },
    clientUrlParams: {
      protocol: "https",
      host: "app.contentstack.com", // Use region-specific host if applicable
      port: 443,
    },
  });
}
export async function fetchHomePage(variants) {
//   return
// console.log("rest");
if(!variants) variants = "";
// console.log("res",Stack);
  let res = await Stack.ContentType("page")
    .Entry("blt64b1a7811b40a5d7")
    .toJSON().variants(variants).fetch();
    console.log(variants,res);
    return res;
}
fetchHomePage();




