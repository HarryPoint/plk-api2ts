import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.135.148:16700/doc.html#/default/产能相关/batchImportUsingPOST
*/
export default function fetchMethod(options: { data: ICapacityPreservationDTO[] }, extraOptions?: any) {
    return http<IJSONResultListstring>(
        {
            url: "/masterdata-service/capacity/batchImport",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 产能保存DTO */
export interface ICapacityPreservationDTO {
    /** id */
    id?: string;
    /** 编号 */
    code?: string;
    /** 名称 */
    name: string;
    /** 关联工序id */
    processIds: string[];
    /** 关联物料id */
    materialIds: string[];
    /** 准备耗时 */
    readyTime?: number;
    /** 准备时间单位 */
    readyTimeUnit?: ECapacityPreservationDTO_readyTimeUnit;
    /** 生产耗时 */
    capacityProduceTime?: number;
    /** 生产时间单位 */
    capacityTimeType?: ECapacityPreservationDTO_capacityTimeType;
    /** 产出数量 */
    capacityProduceQuantity?: number;
}
/** JSONResult«List«string»» */
export interface IJSONResultListstring {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: string[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum ECapacityPreservationDTO_readyTimeUnit {
    /** 秒 */
    SECOND = "SECOND",
    /** 分钟 */
    MIN = "MIN",
    /** 小时 */
    HOUR = "HOUR"
}

export enum ECapacityPreservationDTO_capacityTimeType {
    /** 秒 */
    SECOND = "SECOND",
    /** 分钟 */
    MIN = "MIN",
    /** 小时 */
    HOUR = "HOUR"
}
