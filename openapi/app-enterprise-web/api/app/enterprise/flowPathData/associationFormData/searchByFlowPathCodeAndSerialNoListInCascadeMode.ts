import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/流程数据相关/searchByFlowPathCodeAndSerialNoListInCascadeModeUsingPOST
*/
export default function fetchMethod(options: { data: IPaging3 }, extraOptions?: any) {
    return http<IJSONResultListFormCascadeQueryResultVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/flowPathData/associationFormData/searchByFlowPathCodeAndSerialNoListInCascadeMode",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 分页_3 */
export interface IPaging3 {
    /** 关联表单编码 */
    flowPathCode?: string;
    /** 当前页面 */
    pageNo?: number;
    /** 显示序列编码列表 */
    showSerialCodeList?: string[];
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 显示字段编码 */
    showFieldCode?: string;
    /** 全局搜索关键字 */
    globalSearch?: string;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: string;
}
/** JSONResult«List«FormCascadeQueryResultVO»» */
export interface IJSONResultListFormCascadeQueryResultVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IFormCascadeQueryResultVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** FormCascadeQueryResultVO */
export interface IFormCascadeQueryResultVO {
    /** id */
    id?: number;
    /** 显示名称/显示分组名称/处理人名称 */
    name?: string;
    /** 编码 */
    code?: string;
    /** 子集 */
    children?: IFormCascadeQueryResultVO[];
}
