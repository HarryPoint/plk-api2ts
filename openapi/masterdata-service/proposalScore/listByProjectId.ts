import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/合理化建议评分相关/listByProjectIdUsingPOST
export default function fetchMethod(params: { projectId: number }) {
    return post<IJSONResultListProposalScoreResponseDTO['data']>({
      url: "/masterdata-service/proposalScore/listByProjectId",
      params,
    });
}
// JSONResult«List«ProposalScoreResponseDTO»»
export interface IJSONResultListProposalScoreResponseDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProposalScoreResponseDTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// ProposalScoreResponseDTO
export interface IProposalScoreResponseDTO {
    // ID
    id: number;
    // 评分编码
    code: string;
    // 项目ID
    projectId: number;
    // 合理化建议ID
    proposalId: number;
    // 初评者的得分
    preliminaryEvaluationScore: number;
    // 初评人员
    preliminaryEvaluationUserId: number;
    // 初评人员名称
    preliminaryEvaluationUserName: string;
    // 初评意见
    preliminaryEvaluationOpinions: string;
    // 复评得分
    reEvaluationScore: number;
    // 复评人员
    reEvaluationUserId: number;
    // 复评人员名称
    reEvaluationUserName: string;
    // 复评意见
    reEvaluationOpinions: string;
}
