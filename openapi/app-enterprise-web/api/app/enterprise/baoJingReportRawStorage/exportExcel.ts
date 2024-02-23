import { get } from '@/api/http';
 
// http://47.108.139.107:16400/doc.html#/default/库存统计（原材料）日报表/exportExcelUsingGET_5
export default function fetchMethod(params: { ticket: string }) {
    return get<IModelAndView['data']>({
      url: "/app-enterprise-web/api/app/enterprise/baoJingReportRawStorage/exportExcel",
      params,
    });
}
// ModelAndView
export interface IModelAndView {
}
