export {};

// import { rtkApi } from "@/shared/api/rtkApi";
// import { conversionCatalogs } from "../lib/conversionCatalogs";
// import { Catalogs } from "../types/catalog";

// interface Body {
//   method: string;
// }
// const fetchCatalogsApi = rtkApi.injectEndpoints({
//   endpoints: (build) => ({
//     fetchCatalogs: build.mutation<Iresponse<Catalogs[]>, Partial<Body>>({
//       query: (payload) => {
//         return {
//           url: `getCatalogs`,
//           method: "POST",
//           body: payload,
//         };
//       },
//     }),
//   }),
// });

// export const useFetchCatalogsApi = fetchCatalogsApi.useFetchCatalogsMutation;
