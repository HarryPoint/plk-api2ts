import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/产能相关/saveUsingPOST
*/
export default function fetchMethod(options: { data: ICapacityPreservationDTO }, extraOptions?: any) {
    return http<IJSONResultProductivityResponseObject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/capacity/save",
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
    readyTimeUnit?: ECapacityPreservationDTO_readyTimeUnit;
    /** 生产耗时 */
    capacityProduceTime?: number;
    /** 生产时间单位 */
    capacityTimeType?: ECapacityPreservationDTO_capacityTimeType;
    /** 产出数量 */
    capacityProduceQuantity?: number;
}
/** JSONResult«产能响应对象» */
export interface IJSONResultProductivityResponseObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProductivityResponseObject;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 产能响应对象 */
export interface IProductivityResponseObject {
    /** id */
    id?: number;
    /** 编号 */
    code?: string;
    /** 名称 */
    name?: string;
    /** 关联工序 */
    processRp?: IAssociatedDropDownResponseObjects[];
    /** 关联物料 */
    materialRp?: IAssociatedDropDownResponseObjects[];
    /** 准备耗时 */
    readyTime?: number;
    /** 准备时间单位 */
    readyTimeUnit?: EProductivityResponseObject_readyTimeUnit;
    /** 生产耗时 */
    capacityProduceTime?: number;
    /** 生产时间单位 */
    capacityTimeType?: EProductivityResponseObject_capacityTimeType;
    /** 产出数量 */
    capacityProduceQuantity?: number;
}
/** 关联下拉响应对象 */
export interface IAssociatedDropDownResponseObjects {
    /** id */
    id?: number;
    /** 显示字段名称 */
    showFieldValue?: string;
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

export enum EProductivityResponseObject_readyTimeUnit {
    /** 秒 */
    SECOND = "SECOND",
    /** 分钟 */
    MIN = "MIN",
    /** 小时 */
    HOUR = "HOUR"
}

export enum EProductivityResponseObject_capacityTimeType {
    /** 秒 */
    SECOND = "SECOND",
    /** 分钟 */
    MIN = "MIN",
    /** 小时 */
    HOUR = "HOUR"
}
