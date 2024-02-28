import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.135.148:16700/doc.html#/default/项目应用相关/changeValidUsingPOST_6
*/
export default function fetchMethod(options: { data: IEnableOrDisableVO }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/projectApplication/changeValid",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 启用or停用VO */
export interface IEnableOrDisableVO {
    /** id */
    id: string;
    /** 状态 */
    dataStatus: number;
}
/** JSONResult«object» */
export interface IJSONResultobject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
