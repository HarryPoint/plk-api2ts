import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/项目任务相关/exportProjectTaskUsingGET
*/
export default function fetchMethod(params: { ticket: string }, extraOptions?: any) {
    return http<IModelAndView>(
        {
            url: "/app-enterprise-web/api/app/enterprise/projectTask/exportProjectTask",
            method: "get",
            params,
        },
        extraOptions,
    );
}
/** ModelAndView */
export interface IModelAndView {
}
