import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/项目任务相关/exportProjectTaskUsingGET
export default function fetchMethod(params: { ticket: string }) {
    return http<IModelAndView>({
        url: "/app-enterprise-web/api/app/enterprise/projectTask/exportProjectTask",
        method: "get",
        params,
    });
}
// ModelAndView
export interface IModelAndView {
}
