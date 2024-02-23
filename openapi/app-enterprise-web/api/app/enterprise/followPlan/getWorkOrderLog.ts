import { post } from '@/api/http';
 
// http://47.108.139.107:16400/doc.html#/default/CRM-跟进计划相关/getWorkOrderLogUsingPOST_14
export default function fetchMethod(data: IJobLogSearchVO) {
    return post<IJSONResultThePageInformationWorkOrderLogReturnsVO['data']>({
      url: "/app-enterprise-web/api/app/enterprise/followPlan/getWorkOrderLog",
      data,
    });
}
// 工单日志搜索VO
export interface IJobLogSearchVO {
    // 当前页面
    pageNo: number;
    // 业务流程ID
    flowPathId: number;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: IPagingSortVO[];
    // 工单id
    id: number;
    // 业务流程系统类型
    flowPathSystemType: string;
    // 业务数据ID列表
    businessDataId: number;
}
// 分页排序VO
export interface IPagingSortVO {
    // undefined
    column: string;
    // undefined
    isAsc: string;
}
// JSONResult«分页信息«工单日志返回VO»»
export interface IJSONResultThePageInformationWorkOrderLogReturnsVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IThePageInformationTicketLogReturnsVO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 分页信息«工单日志返回VO»
export interface IThePageInformationTicketLogReturnsVO {
    // 当前页码
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 总页数
    totalPage: number;
    // 总的记录数
    totalCount: number;
    // 分页列表
    list: ITheTicketLogReturnsVO[];
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
// 工单日志返回VO
export interface ITheTicketLogReturnsVO {
    // id
    id: number;
    // 所属流程工单id
    flowPathWorkOrderId: number;
    // 所属流程节点id
    flowPathNodeId: number;
    // 流程节点名称
    flowPathNodeName: string;
    // 是否首节点
    isFirstNode: string;
    // 日志描述
    description: string;
    // 创建时间
    createTime: string;
    // 抄送人
    carbonCopyUsers: ICcToVO[];
    // 执行人
    handleUsers: IToBeCopiedToVO1[];
    // 流程任务id
    flowPathTaskId: number;
    // 执行意见
    notes: string;
}
// 待办抄送人VO
export interface ICcToVO {
    // 抄送人id
    userId: number;
    // 抄送人姓名
    username: string;
    // 是否已读
    isRead: string;
}
// 待办抄送人VO_1
export interface IToBeCopiedToVO1 {
    // 操作人
    userId: number;
    // 操作人姓名
    username: string;
    // 执行意见
    notes: string;
    // 创建时间(被转交方-转交时间)
    createTime: string;
    // 接受时间
    acceptTime: string;
    // 开始时间
    beginningTime: string;
    // 完成时间(当logStatus=TRANSFER时，为：转交方-转交时间)
    completeTime: string;
    // 日志状态
    logStatus: string;
    // 日志状态描述
    logStatusDesc: string;
    // 下个节点执行人列表
    nextNodeExecutorList: INextNodeExecutor[];
    // 转交给用户id
    transferToUserId: number;
    // 转交给用户名称
    transferToUserName: string;
    // 转交来源用户id
    transferFromUserId: number;
    // 转交来源用户名称
    transferFromUserName: string;
}
// 下个节点执行人
export interface INextNodeExecutor {
    // 抄送人id
    userId: number;
    // 抄送人姓名
    username: string;
}
