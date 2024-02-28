import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16400/doc.html#/default/工艺路径相关/getQualityInspectionPlanSelectorUsingGET_1
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultListSelectVOAsTheInspectionSolution>(
        {
            url: "/app-enterprise-web/api/app/enterprise/routing/qualityInspectionPlan/getSelector",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«质检方案选择VO»» */
export interface IJSONResultListSelectVOAsTheInspectionSolution {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ITheInspectionSolutionIsVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 质检方案选择VO */
export interface ITheInspectionSolutionIsVO {
    /** id */
    id?: string;
    /** 质检方案名称 */
    name?: string;
    /** 质检方案编号 */
    code?: string;
}
