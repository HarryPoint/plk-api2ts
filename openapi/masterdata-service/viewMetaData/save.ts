import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/视图元数据相关/saveUsingPOST_9
*/
export default function fetchMethod(options: { data: IViewMetadataSaveRequestDTO }, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/masterdata-service/viewMetaData/save",
            method: "post",
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
export interface IJSONResultlong {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
