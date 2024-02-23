import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/宝晶寄售入库报表相关/exportExcelUsingGET
export default function fetchMethod(params: { ticket: string }) {
    return http<IModelAndView>({
        url: "/app-enterprise-web/api/app/enterprise/consignmentInboundAnalyzeReport/exportExcel",
        method: "get",
        params,
    });
}
// ModelAndView
export interface IModelAndView {
}
