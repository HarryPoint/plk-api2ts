import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/产能相关/getInfoByIdUsingGET
*/
export default function fetchMethod(params: { id?: string }, extraOptions?: any) {
    return http<IJSONResultProductivityResponseObject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/capacity/getInfoById",
            method: "get",
            params,
        },
        extraOptions,
    );
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
    readyTimeUnit?: string;
    /** 生产耗时 */
    capacityProduceTime?: number;
    /** 生产时间单位 */
    capacityTimeType?: string;
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
