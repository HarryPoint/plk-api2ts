import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/质检方案/changeValidUsingPOST_9
*/
export default function fetchMethod(options: { data: IEnableOrDisableVO, params: { enterpriseId?: string; userId?: string } }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/qualityInspectionPlan/changeValid",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 启用or停用VO */
export interface IEnableOrDisableVO {
    /** 状态 */
    dataStatus: number;
    /** id */
    id: string;
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
