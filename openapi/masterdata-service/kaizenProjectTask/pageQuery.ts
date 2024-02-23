import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/kaizen项目任务相关/pageQueryUsingPOST_1
export default function fetchMethod(data: IPagingInformation) {
    return http<IKaizenProjectTaskResponseDTOJSONResultPagingInformation>({
        url: "/masterdata-service/kaizenProjectTask/pageQuery",
        method: "post",
        data,
    });
}
// 分页信息
export interface IPagingInformation {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 任务名称 - 关键字查询
    name: string;
    // 开始时间 - 开始范围
    beginTimeBegin: string;
    // 关联项目 - 下拉多选
    projectIdList: number[];
    // 开始时间 - 结束范围
    beginTimeEnd: string;
    // 任务状态 - 下拉多选
    projectTaskStatusList: string[];
    // 执行人 - 下拉多选
    leaderUserIdList: number[];
    // 优先级 - 下拉多选查询
    priorityList: string[];
    // 创建时间 - 结束范围
    createTimeEnd: string;
    // 备注 - 关键字查询
    remark: string;
    // 创建员工 - 下拉多选查询
    createUserIdList: number[];
    // 创建时间 - 开始范围
    createTimeBegin: string;
    // 创建时间 - Y - 正序， N - 倒序
    createTimeAsc: string;
}
// JSONResult«分页信息«KaizenProjectTaskResponseDTO»»
export interface IKaizenProjectTaskResponseDTOJSONResultPagingInformation {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IThePagingInformationKaizenProjectTaskResponseDTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 分页信息«KaizenProjectTaskResponseDTO»
export interface IThePagingInformationKaizenProjectTaskResponseDTO {
    // 当前页码
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 总页数
    totalPage: number;
    // 总的记录数
    totalCount: number;
    // 分页列表
    list: IKaizenProjectTaskResponseDTO[];
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
// KaizenProjectTaskResponseDTO
export interface IKaizenProjectTaskResponseDTO {
    // ID
    id: number;
    // 编码
    code: string;
    // 名称
    name: string;
    // 项目任务状态
    projectTaskStatus: string;
    // 关联项目
    projectId: IAssociateFormDataVO;
    // 执行人
    leaderUserId: IAssociateFormDataVO;
    // 上级ID
    parentId: number;
    // 开始时间
    beginTime: string;
    // 结束时间
    endTime: string;
    // 优先级
    priority: string;
    // 备注
    remark: string;
    // 创建用户ID
    createUserId: IAssociateFormDataVO;
    // 创建时间
    createTime: string;
    // 下级任务列表
    childTaskList: IKaizenProjectTaskResponseDTO[];
}
// 关联表单数据VO
export interface IAssociateFormDataVO {
    // id
    id: number;
    // 关联表单显示值
    showFieldValue: string;
    // 数据状态
    dataStatus: number;
    // 是否已删除显示字段
    isRemovedShowField: string;
    // 主数据ID
    masterDataId: number;
}
