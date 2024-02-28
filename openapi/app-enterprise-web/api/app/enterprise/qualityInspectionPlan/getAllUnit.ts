import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16400/doc.html#/default/质检方案/getAllUnitUsingGET_2
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultListIdNameVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/qualityInspectionPlan/getAllUnit",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«Id，名称VO»» */
export interface IJSONResultListIdNameVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IIdNameVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** Id，名称VO */
export interface IIdNameVO {
    /** id */
    id: string;
    /** 名称 */
    name: string;
}
