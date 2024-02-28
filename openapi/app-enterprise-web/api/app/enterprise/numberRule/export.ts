import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16400/doc.html#/default/编码规则相关/exportUsingPOST_26
*/
export default function fetchMethod(options: { data: ICodeRulePagingQueryVO }, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/app-enterprise-web/api/app/enterprise/numberRule/export",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 编码规则分页查询VO */
export interface ICodeRulePagingQueryVO {
    /** 流程id */
    flowPathId?: string;
    /** 当前页面 */
    pageNo?: number;
    /** 字段名称 */
    fieldName?: string;
    /** 分页大小 */
    pageSize?: number;
    /** 流程表单序列值集合 */
    flowPathFormFiledSerialNoList?: string[];
    /** 排序字段集 */
    orders?: IPagingSortVO[];
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«long» */
export interface IJSONResultlong {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}
