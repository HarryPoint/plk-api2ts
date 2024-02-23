import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/宝晶采购到货统计报表相关/exportConsignmentLossAnalyzeExcelUsingGET_1
export default function fetchMethod(params: { ticket: string }) {
    return http<IModelAndView>({
        url: "/app-enterprise-web/api/app/enterprise/purchaseArrivedStatisticReport/exportExcel",
        method: "get",
        params,
    });
}
// ModelAndView
export interface IModelAndView {
}
