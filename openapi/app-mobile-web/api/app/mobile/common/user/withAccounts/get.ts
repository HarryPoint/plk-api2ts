import { post } from '@/api/http';
 
// http://47.108.139.107:17400/doc.html#/default/公共相关/getUsersWithAccountsUsingPOST
export default function fetchMethod(data: ISearchVOWithTheHomeOwnerDataSelectionList) {
    return post<IJSONResultListIdNameNumberVO['data']>({
      url: "/app-mobile-web/api/app/mobile/common/user/withAccounts/get",
      data,
    });
}
// 用户主数据选择列表搜索VO
export interface ISearchVOWithTheHomeOwnerDataSelectionList {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: IPagingSortVO[];
    // 用户名称/编号
    nameOrCode: string;
    // 员工ID列表
    idList: number[];
}
// 分页排序VO
export interface IPagingSortVO {
    // undefined
    column: string;
    // undefined
    isAsc: string;
}
// JSONResult«List«Id，名称，编号VO»»
export interface IJSONResultListIdNameNumberVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IIdNameNumberVO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// Id，名称，编号VO
export interface IIdNameNumberVO {
    // id
    id: number;
    // 名称
    name: string;
    // 编号
    code: string;
}
