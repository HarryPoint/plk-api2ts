import { http } from '@/api/http';

// http://47.108.139.107:17400/doc.html#/default/班次相关/getPageUsingPOST
export default function fetchMethod(data: IShiftSearchVO) {
    return http<IJSONResultPagingInformationShiftReturnsVO>({
        url: "/app-mobile-web/api/app/mobile/classShift/getPage",
        method: "post",
        data,
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
// JSONResult«分页信息«班次返回VO»»
export interface IJSONResultPagingInformationShiftReturnsVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IPagingInformationShiftReturnsVO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 分页信息«班次返回VO»
export interface IPagingInformationShiftReturnsVO {
    // 当前页码
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 总页数
    totalPage: number;
    // 总的记录数
    totalCount: number;
    // 分页列表
    list: IShiftBackVO[];
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
// 班次返回VO
export interface IShiftBackVO {
    // id
    id: number;
    // 班次名称
    name: string;
    // 班次编号
    code: string;
    // 开始时间
    beginTime: string;
    // 班次结束时间类型
    endTimeType: string;
    // 结束时间
    endTime: string;
    // 状态
    dataStatus: number;
    // 创建人
    createUserId: number;
    // 创建人姓名
    createUsername: string;
    // 创建时间
    createTime: string;
}
