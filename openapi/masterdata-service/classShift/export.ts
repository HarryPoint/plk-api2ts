import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/班次相关/exportUsingPOST_3
export function fetchMethod(data: IShiftSearchVO, params: { enterpriseId: number }) {
    return post({
      url: "/masterdata-service/classShift/export",
      data,
      params,
    });
}
// 班次搜索VO
export interface IShiftSearchVO {
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
    // 状态
    dataStatus: number;
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
