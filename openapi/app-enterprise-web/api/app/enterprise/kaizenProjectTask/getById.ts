import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/项目任务相关/getByIdUsingGET_7
export default function fetchMethod(params: { id: number }) {
    return http<IJSONResultKaizenProjectTaskResponseDTO>({
        url: "/app-enterprise-web/api/app/enterprise/kaizenProjectTask/getById",
        method: "get",
        params,
    });
}
// JSONResult«KaizenProjectTaskResponseDTO»
export interface IJSONResultKaizenProjectTaskResponseDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IKaizenProjectTaskResponseDTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
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