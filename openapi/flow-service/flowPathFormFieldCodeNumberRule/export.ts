import { http } from '@/api/http';

// http://47.108.139.107:16500/doc.html#/default/流程表单字段编码相关/exportUsingPOST
export default function fetchMethod(data: ICodeRulePagingQueryVO, params: { enterpriseId: number }, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/flow-service/flowPathFormFieldCodeNumberRule/export",
            method: "post",
            data,
            params,
        },
        extraOptions,
    );
}
// 编码规则分页查询VO
export interface ICodeRulePagingQueryVO {
    // 流程id
    flowPathId: number;
    // 当前页面
    pageNo: number;
    // 字段名称
    fieldName: string;
    // 分页大小
    pageSize: number;
    // 流程表单序列值集合
    flowPathFormFiledSerialNoList: string[];
    // 排序字段集
    orders: IPagingSortVO[];
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
