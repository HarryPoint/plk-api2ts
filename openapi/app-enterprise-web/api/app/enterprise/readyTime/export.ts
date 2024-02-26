import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/准备期相关/exportUsingPOST_44
*/
export default function fetchMethod(options: { data: IPreparationPeriodQueryVO }, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/app-enterprise-web/api/app/enterprise/readyTime/export",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 准备期查询VO */
export interface IPreparationPeriodQueryVO {
    /** 当前页面 */
    pageNo?: number;
    /** 编号 */
    code?: string;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 工序id */
    processId?: number;
    /** 名称 */
    name?: string;
    /** 规则类型 */
    ruleType?: string;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: string;
}
/** JSONResult«long» */
export interface IJSONResultlong {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: number;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
