import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.135.148:16700/doc.html#/default/视图元数据相关/queryUsingPOST_3
*/
export default function fetchMethod(options: { data: IViewMetadataQueryRequestDTO }, extraOptions?: any) {
    return http<IJSONResultViewMetadataQueryResponseDTO>(
        {
            url: "/masterdata-service/viewMetaData/query",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** ViewMetadataQueryRequestDTO */
export interface IViewMetadataQueryRequestDTO {
    /** 应用编码 */
    appCode?: string;
    /** 实例ID */
    instanceId?: string;
}
/** JSONResult«ViewMetadataQueryResponseDTO» */
export interface IJSONResultViewMetadataQueryResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IViewMetadataQueryResponseDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** ViewMetadataQueryResponseDTO */
export interface IViewMetadataQueryResponseDTO {
    /** ID */
    id?: string;
    /** 应用编码 */
    appCode?: string;
    /** 实例ID */
    instanceId?: string;
    /** 元数据 */
    meta?: Record<string, Record<string, any>>;
}
