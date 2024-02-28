import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16400/doc.html#/default/项目任务相关/downloadProjectTaskImportTemplateUsingGET
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IModelAndView>(
        {
            url: "/app-enterprise-web/api/app/enterprise/projectTask/downloadProjectTaskImportTemplate",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** ModelAndView */
export interface IModelAndView {
}
