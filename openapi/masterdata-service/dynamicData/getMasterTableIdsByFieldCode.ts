import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/动态数据相关/getMasterTableIdsByFieldCodeUsingPOST
*/
export default function fetchMethod(options: { data: IPrimaryTableIdQueryVOparams: { enterpriseId?: number, extraOptions?: any) {
    return http<IJSONResultListlong>(
        {
            url: "/masterdata-service/dynamicData/getMasterTableIdsByFieldCode",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 主表id查询VO */
export interface IPrimaryTableIdQueryVO {
    /** 流程编码 */
    flowPathCode?: string;
    /** 过滤字段序列号 */
    filterFieldCode?: string;
    /** 过滤字段值 */
    filterFieldValue?: Record<string, any>;
}
/** JSONResult«List«long»» */
export interface IJSONResultListlong {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: number[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
