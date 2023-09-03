import { ORDERS_URL, PAYPAL_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const ordersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({ query: (order) => ({
      url: ORDERS_URL, method: "POST", body: {...order}
    })}),
    getOrderDetails: builder.query({ query: (orderId) =>
      ({url:`${ORDERS_URL}/${orderId}`}), keepUnusedDataFor: 5 // seconds
    }),
    payOrder: builder.mutation({ query: ({orderId, details}) => (
      (console.log("payOrder:: orderId:", orderId, ", details:", details), {
        url:`${PAYPAL_URL}/${orderId}/pay`, method: "PUT", body: {...details}
      })
    )}),
    getPayPalClientId: builder.query({ query: () =>
      ({ url: PAYPAL_URL }), keepUnusedDataFor: 5 // seconds
    }),
  }),
});

export const {
  useCreateOrderMutation, useGetOrderDetailsQuery, usePayOrderMutation, useGetPayPalClientIdQuery,
} = ordersApiSlice;
