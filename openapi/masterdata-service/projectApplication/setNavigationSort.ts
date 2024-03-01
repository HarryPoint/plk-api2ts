import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.135.148:16700/doc.html#/default/项目应用相关/setNavigationSortUsingPOST
*/
export default function fetchMethod(options: { data: IProjectApplicationNavigationSortRequestObjects }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/projectApplication/setNavigationSort",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 项目应用导航排序请求对象 */
export interface IProjectApplicationNavigationSortRequestObjects {
    /** undefined */
    projectApplicationIds?: string[];
    /** undefined */
    projectId: string;
}
/** JSONResult«object» */
export interface IJSONResultObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
