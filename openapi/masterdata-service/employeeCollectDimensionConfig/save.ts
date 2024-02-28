import { http } from "@/api/http";

/**
* @author TanPeng
* @link http://47.108.139.107:16700/doc.html#/default/用户聚合维度配置相关/saveUsingPOST_1
*/
export default function fetchMethod(options: { data: IUserAggregationDimensionConfigurationRequest }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/employeeCollectDimensionConfig/save",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 用户聚合维度配置请求 */
export interface IUserAggregationDimensionConfigurationRequest {
    /** 编码 */
    code?: string;
    /** 列配置JSON */
    config?: Record<string, Record<string, any>>;
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
