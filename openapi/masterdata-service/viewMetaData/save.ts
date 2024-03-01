import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.135.148:16700/doc.html#/default/视图元数据相关/saveUsingPOST_9
*/
export default function fetchMethod(options: { data: IViewMetadataSaveRequestDTO }, extraOptions?: any) {
    return http<IJSONResultLong>(
        {
            url: "/masterdata-service/viewMetaData/save",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** ViewMetadataSaveRequestDTO */
export interface IViewMetadataSaveRequestDTO {
    /** 应用编码 */
    appCode?: string;
    /** 实例ID */
    instanceId?: string;
    /** 元数据 */
    meta?: Record<string, Record<string, any>>;
}
/** JSONResult«long» */
export interface IJSONResultLong {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: string;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
