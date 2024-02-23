import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/标签设置/exportUsingPOST_21
export default function fetchMethod(data: IExceptionTagSearchVO, params: { enterpriseId: number }) {
    return http<IJSONResultlong>({
        url: "/masterdata-service/produceTag/export",
        method: "post",
        data,
        params,
    });
}
// 异常标签搜索VO
export interface IExceptionTagSearchVO {
    // 当前页面
    pageNo: number;
    // 编号
    code: string;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: IPagingSortVO[];
    // 名称
    name: string;
    // 类型
    type: string;
    // 状态(是否启用)
    isValid: string;
}
// 分页排序VO
export interface IPagingSortVO {
    // undefined
    column: string;
    // undefined
    isAsc: string;
}
// JSONResult«long»
export interface IJSONResultlong {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: number;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
