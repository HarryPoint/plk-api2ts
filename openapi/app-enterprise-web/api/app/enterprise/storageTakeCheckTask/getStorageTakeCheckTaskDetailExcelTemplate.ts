import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/仓库盘点任务相关/getStorageTakeCheckTaskDetailExcelTemplateUsingGET
export default function fetchMethod() {
    return http<IModelAndView>({
        url: "/app-enterprise-web/api/app/enterprise/storageTakeCheckTask/getStorageTakeCheckTaskDetailExcelTemplate",
        method: "get",
    });
}
// ModelAndView
export interface IModelAndView {
}
