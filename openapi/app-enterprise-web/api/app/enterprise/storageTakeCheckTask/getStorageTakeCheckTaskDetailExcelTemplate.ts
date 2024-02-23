import { get } from '@/api/http';
 
// http://47.108.139.107:16400/doc.html#/default/仓库盘点任务相关/getStorageTakeCheckTaskDetailExcelTemplateUsingGET
export default function fetchMethod() {
    return get<IModelAndView['data']>({
      url: "/app-enterprise-web/api/app/enterprise/storageTakeCheckTask/getStorageTakeCheckTaskDetailExcelTemplate",
    });
}
// ModelAndView
export interface IModelAndView {
}
