import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.135.148:16700/doc.html#/default/动态数据相关/searchByFlowPathCodeAndSerialNoListInCascadeModeUsingPOST
*/
export default function fetchMethod(options: { data: IPaging3 }, extraOptions?: any) {
    return http<IJSONResultListFormCascadeQueryResultVO>(
        {
            url: "/masterdata-service/dynamicData/associationFormData/searchByFlowPathCodeAndSerialNoListInCascadeMode",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 分页_3 */
export interface IPaging3 {
    /** 关联表单编码 */
    flowPathCode?: string;
    /** 全局搜索关键字 */
    globalSearch?: string;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 显示字段编码 */
    showFieldCode?: string;
    /** 显示序列编码列表 */
    showSerialCodeList?: string[];
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«List«FormCascadeQueryResultVO»» */
export interface IJSONResultListFormCascadeQueryResultVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IFormCascadeQueryResultVO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** FormCascadeQueryResultVO */
export interface IFormCascadeQueryResultVO {
    /** 子集 */
    children?: IFormCascadeQueryResultVO[];
    /** 编码 */
    code?: string;
    /** id */
    id?: string;
    /** 显示名称/显示分组名称/处理人名称 */
    name?: string;
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}
