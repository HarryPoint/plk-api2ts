import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/产能相关/getInfoByIdUsingGET
*/
export default function fetchMethod(options: { params: { id?: string } }, extraOptions?: any) {
    return http<IJSONResultProductivityResponseObject>(
        {
            url: "/masterdata-service/capacity/getInfoById",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«产能响应对象» */
export interface IJSONResultProductivityResponseObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IProductivityResponseObject;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 产能响应对象 */
export interface IProductivityResponseObject {
    /** 产出数量 */
    capacityProduceQuantity?: number;
    /** 生产耗时 */
    capacityProduceTime?: number;
    /** 生产时间单位 */
    capacityTimeType?: EProductivityResponseObject_capacityTimeType;
    /** 编号 */
    code?: string;
    /** id */
    id?: string;
    /** 关联物料 */
    materialRp?: IAssociatedDropDownResponseObjects[];
    /** 名称 */
    name?: string;
    /** 关联工序 */
    processRp?: IAssociatedDropDownResponseObjects[];
    /** 准备耗时 */
    readyTime?: number;
    /** 准备时间单位 */
    readyTimeUnit?: EProductivityResponseObject_readyTimeUnit;
}
/** 关联下拉响应对象 */
export interface IAssociatedDropDownResponseObjects {
    /** id */
    id?: string;
    /** 显示字段名称 */
    showFieldValue?: string;
}

export enum EProductivityResponseObject_capacityTimeType {
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
