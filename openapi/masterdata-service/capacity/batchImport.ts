import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/产能相关/batchImportUsingPOST
*/
export default function fetchMethod(options: { data: ICapacityPreservationDTO[] }, extraOptions?: any) {
    return http<IJSONResultListstring>(
        {
            url: "/masterdata-service/capacity/batchImport",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 产能保存DTO */
export interface ICapacityPreservationDTO {
    /** id */
    id?: number;
    /** 编号 */
    code?: string;
    /** 名称 */
    name: string;
    /** 关联工序id */
    processIds: number[];
    /** 关联物料id */
    materialIds: number[];
    /** 准备耗时 */
    readyTime?: number;
    /** 准备时间单位 */
    readyTimeUnit?: string;
    /** 生产耗时 */
    capacityProduceTime?: number;
    /** 生产时间单位 */
    capacityTimeType?: string;
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
    ts?: number;
}
