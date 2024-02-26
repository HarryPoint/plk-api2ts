import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/应用相关/exportForNotSystemUsingPOST
*/
export default function fetchMethod(options: { data: IProcessSearchVO }, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/app-enterprise-web/api/app/enterprise/application/exportForNotSystem",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 流程搜索VO */
export interface IProcessSearchVO {
    /** 当前页面 */
    pageNo?: number;
    /** 编号 */
    code?: string;
    /** 分页大小 */
    pageSize?: number;
    /** 是否是系统应用 */
    isSystem?: string;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 名称 */
    name?: string;
    /** 状态 */
    dataStatus?: number[];
    /** 创建时间-开始时间 */
    beginTime?: string;
    /** 创建时间-结束时间 */
    endTime?: string;
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
