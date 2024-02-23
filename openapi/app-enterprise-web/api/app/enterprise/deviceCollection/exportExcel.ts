import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/设备数采数据概览相关/exportExcelUsingGET_8
export default function fetchMethod(params: { ticket: string }) {
    return http<IModelAndView>({
        url: "/app-enterprise-web/api/app/enterprise/deviceCollection/exportExcel",
        method: "get",
        params,
    });
}
// ModelAndView
export interface IModelAndView {
}
