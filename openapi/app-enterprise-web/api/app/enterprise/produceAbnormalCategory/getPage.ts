import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/生产异常类型相关/getPageUsingPOST_14
export default function fetchMethod(data: IExceptionTypeSearchVO, extraOptions?: any) {
    return http<IJSONResultPagingInformationExceptionTypeVOIsReturned>(
        {
            url: "/app-enterprise-web/api/app/enterprise/produceAbnormalCategory/getPage",
            method: "post",
            data,
        },
        extraOptions,
    );
}
// 异常类型搜索VO
export interface IExceptionTypeSearchVO {
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
    // 数据状态
    dataStatus: number;
}
// 分页排序VO
export interface IPagingSortVO {
    // undefined
    column: string;
    // undefined
    isAsc: string;
}
// JSONResult«分页信息«异常类型返回VO»»
export interface IJSONResultPagingInformationExceptionTypeVOIsReturned {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IPagingInformationExceptionTypeIsReturnedVO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 分页信息«异常类型返回VO»
export interface IPagingInformationExceptionTypeIsReturnedVO {
    // 当前页码
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 总页数
    totalPage: number;
    // 总的记录数
    totalCount: number;
    // 分页列表
    list: IExceptionTypeReturnsVO[];
    // 最后页页码
    lastPage: number;
    // 是否有上一页
    hasPreviousPage: string;
    // 是否有下一页
    hasNextPage: string;
    // 上一页页码
    previousPage: number;
    // 下一页页码
    nextPage: number;
}
// 异常类型返回VO
export interface IExceptionTypeReturnsVO {
    // id
    id: number;
    // 所属分类
    type: string;
    // 所属分类
    typeDesc: string;
    // 类型名称
    name: string;
    // 类型编号
    code: string;
    // 数据状态
    dataStatus: number;
    // 创建人
    createUserId: number;
    // 创建人姓名
    createUsername: string;
    // 创建时间
    createTime: string;
}
