import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/项目任务相关/downloadProjectTaskImportTemplateUsingGET
export default function fetchMethod() {
    return http<IModelAndView>({
        url: "/app-enterprise-web/api/app/enterprise/projectTask/downloadProjectTaskImportTemplate",
        method: "get",
    });
}
// ModelAndView
export interface IModelAndView {
}
