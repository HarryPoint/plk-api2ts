import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/工费相关/getInfoByIdUsingGET_2
*/
export default function fetchMethod(options: { params: { id?: string } }, extraOptions?: any) {
    return http<IJSONResultLaborResponseObject>(
        {
            url: "/masterdata-service/laborCost/getInfoById",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«工费响应对象» */
export interface IJSONResultLaborResponseObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: ICostResponseObject;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 工费响应对象 */
export interface ICostResponseObject {
    /** 返工产出工费单价（元） */
    backProducePrice?: number;
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
    /** 合格产出工费单价（元） */
    producePrice?: number;
    /** 准备工费（元） */
    readyPrice?: number;
}
/** 关联下拉响应对象 */
export interface IAssociatedDropDownResponseObjects {
    /** id */
    id?: string;
    /** 显示字段名称 */
    showFieldValue?: string;
}
