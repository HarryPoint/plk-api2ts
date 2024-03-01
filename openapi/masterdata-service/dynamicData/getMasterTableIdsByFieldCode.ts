import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/动态数据相关/getMasterTableIdsByFieldCodeUsingPOST
*/
export default function fetchMethod(options: { data: IPrimaryTableIdQueryVO, params: { EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListLong>(
        {
            url: "/masterdata-service/dynamicData/getMasterTableIdsByFieldCode",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 主表id查询VO */
export interface IPrimaryTableIdQueryVO {
    /** 过滤字段序列号 */
    filterFieldCode?: string;
    /** 过滤字段值 */
    filterFieldValue?: Record<string, any>;
    /** 流程编码 */
    flowPathCode?: string;
}
/** JSONResult«List«long»» */
export interface IJSONResultListLong {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: string[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
