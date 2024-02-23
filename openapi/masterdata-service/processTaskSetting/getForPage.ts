import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/工序任务设置相关/getForPageUsingPOST_11
export default function fetchMethod(data: IProcessTaskSearchVO, params: { enterpriseId: number }) {
    return http<IJSONResultPagingInformationProcedureTaskSetVO>({
        url: "/masterdata-service/processTaskSetting/getForPage",
        method: "post",
        data,
        params,
    });
}
// 工序任务搜索VO
export interface IProcessTaskSearchVO {
    // 工序id集合
    processIds: number[];
    // 是否需要分配
    isAssign: string;
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
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
// JSONResult«分页信息«工序任务设置VO»»
export interface IJSONResultPagingInformationProcedureTaskSetVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IPagingInformationProcedureTaskSetVO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 分页信息«工序任务设置VO»
export interface IPagingInformationProcedureTaskSetVO {
    // 当前页码
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 总页数
    totalPage: number;
    // 总的记录数
    totalCount: number;
    // 分页列表
    list: IProcedureTaskSetVO[];
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
// 工序任务设置VO
export interface IProcedureTaskSetVO {
    // 工序id
    processId: number;
    // 工序名称
    processName: string;
    // 工序编号
    processCode: string;
    // 是否需要分配
    isAssign: string;
    // 默认操作人员列表
    defaultUserList: IIdNameNumberVO[];
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
