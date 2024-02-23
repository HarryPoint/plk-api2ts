import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/库存统计（原材料）日报表/exportExcelUsingGET_5
export default function fetchMethod(params: { ticket: string }) {
    return http<IModelAndView>({
        url: "/app-enterprise-web/api/app/enterprise/baoJingReportRawStorage/exportExcel",
        method: "get",
        params,
    });
}
// ModelAndView
export interface IModelAndView {
}
